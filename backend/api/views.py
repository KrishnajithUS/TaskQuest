from . serializers import RegistrationSerializer, AuthTokenSerializer, AppSerializer, AppAddedSerializer
from rest_framework.response import Response
from rest_framework.authtoken.views import ObtainAuthToken
from api.authentication import TokenAuthentication
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
    permission_classes = [AllowAny]

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
            'last_name': user.last_name,
            'is_admin': user.is_admin

        }
        return Response({
            'token': token.key,
            'is_admin': user.is_admin,
            'context': context

        })
# Create app


class CreateAppView(generics.CreateAPIView):
    authentication_classes = [TokenAuthentication,]

    permission_classes = [IsAdminUser]
    queryset = App.objects.all()
    serializer_class = AppSerializer

    def perform_create(self, serializer):
        serializer.save(creator=self.request.user)


class ListAppView(generics.ListAPIView):
    authentication_classes = [TokenAuthentication,]
    permission_classes = [IsAuthenticated]
    serializer_class = AppSerializer

    def get_queryset(self):
        print(self.request.user)
        return App.objects.exclude(appadded__user=self.request.user, appadded__task_completed=True)


class AddAppView(APIView):
    authentication_classes = [TokenAuthentication,]

    permission_classes = [IsAuthenticated]

    def post(self, request):
        print(request.data.get("id"))
        app_id = request.data.get("id")
        # context = {"request": request.data}
        # app = App.objects.get(pk=context["request"].id)
        # print(app)
        serializer = AppAddedSerializer(
            data=request.data,  context={"request": request, "app_id": app_id})
        # obj = AddApp.objects.create(user=request.user, app=app)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        print("serializer errors:", serializer.errors)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class TaskCompleted(generics.ListAPIView):
    authentication_classes = [TokenAuthentication,]

    permission_classes = [IsAuthenticated]
    serializer_class = AppSerializer

    def get_queryset(self):
        print(App.objects.filter(appadded__user=self.request.user,
              appadded__task_completed=False))
        return App.objects.filter(appadded__user=self.request.user, appadded__task_completed=True)


class TotalPoints(APIView):
    authentication_classes = [TokenAuthentication,]

    permission_classes = [IsAuthenticated]

    def get(self, request):
        list_of_app = AppAdded.objects.filter(
            user=request.user, task_completed=True)
        total_point = sum(lst.app.points for lst in list_of_app)
        return Response({"total_points": total_point}, status=status.HTTP_200_OK)


class LogOut(APIView):
    authentication_classes = [TokenAuthentication,]

    permission_classes = [IsAuthenticated]

    def post(self, request):
        request.user.auth_token.delete()

        return Response({"success": "Successfully logged out."},
                        status=status.HTTP_200_OK)
