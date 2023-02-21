from . serializers import RegistrationSerializer, AuthTokenSerializer, AppSerializer, AppAddedSerializer
from rest_framework.response import Response
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticated, AllowAny, IsAdminUser
from django.contrib.auth import get_user_model
from rest_framework import generics, status
from rest_framework.views import APIView
from . models import App, AppAdded
User = get_user_model()


class RegisterUserView(generics.CreateAPIView):
    # print("this api")
    permission_classes = [AllowAny]
    queryset = User.objects.all()
    serializer_class = RegistrationSerializer

# Overriding the default Token class to add some data to it.


class LoginView(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        # implementing Custom Serializer
        serializer = AuthTokenSerializer(data=request.data,
                                         context={'request': request})
        serializer.is_valid(raise_exception=True)
        
        print(serializer.errors)

        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        context = {
            'user_id': user.pk,
            'email': user.email,
            'first_name': user.first_name,
            'last_name': user.last_name
        }
        return Response({
            'token': token.key,
            'is_admin': user.is_admin,
            'context': context

        })
# Create app


class CreateAppView(generics.CreateAPIView):
    permission_classes = [IsAdminUser]
    queryset = App.objects.all()
    serializer_class = AppSerializer

    def perform_create(self, serializer):
        serializer.save(creator=self.request.user)


class ListAppView(generics.ListAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = AppSerializer

    def get_queryset(self):
        return App.objects.filter(task_completed=False)


class AddAppView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        app = App.objects.get(pk=request.data.get("id"))
        if app is not None:
            serializer = AppAddedSerializer(data=request.data)
        # obj = AddApp.objects.create(user=request.user, app=app)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            app.taskcompleted = True
            app.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class TaskCompleted(generics.ListAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = AppSerializer

    def get_queryset(self):
        return App.objects.filter(taskcompleted=True)


class TotalPoints(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        list_of_app = AppAdded.objects.filter(user=request.user)
        total_point = sum(lst.app.points for lst in list_of_app)
        return Response({"total_points": total_point}, status=status.HTTP_200_OK)
