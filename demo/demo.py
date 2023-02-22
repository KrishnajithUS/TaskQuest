# # def add_num(num):
# #     lst = []
# #     new_num = lst.append(int(num))
# #     prev_sum = 0
# #     for i in range(0,len(new_num)):
# #         prev_sum = prev_sum + new_num[i]
# #         if len(prev_sum) > 2:
# #             return prev_sum - new_num


# # num = input("Enter a Number")

# # str ="hari"
# # ns=str[::-1]
# def add_num(num):
#     print(num)
#     # lst = []
#     # lst.append(num.split())
#     sum = 0
#     for i in num:
#         sum = sum+int(i)
#     return sum


# num = int(input("Enter a 4 digit number"))

# print(add_num(num))




# def view_(request):
#     context = {
#         "initial":"welcome to Django"
#     }
#     return render(request,context,"welcome.html")


# class demo_model(models.Model):
#     name = models.CharField(max_length=100)
#     image=models.ImageField()
#     dec=models.DecimalField()

# class demo_serializer(serializer.modelserializer):
#      class Meta:
#          model = demo_model
# class demo_api_view(APIview):
#     def post(self,request):
        
#         seriallizer=demo_serializer(data=request.data)
#         if seriallizer.is_valid():
#             seriallizer.save()
#             return Response(seriallizer.data)
#     def get(self,request):
#         id_ =request.data.get("id")
# class demo_api_view(generics.ListCreate):
#     queryset =demo_model.objects.all()
#     serializer_class = demo_serializer
#     def get_queryset():
#         return demo_model.objects.all()
#     # def 
        
# lst =[ x for x in range(0 , n) if x % 2 == 0 ]

# import Contact 

# const home () =>{ 
    
#     return(
#         <h1>hello</h1>
#     )
# }
# export default home


# {% extends "main.html" %}
# {% blockcontent %}
# <h1>hello</h>
# {% endblock %}


# <a href ={% url 'name' %} 

# {% url ''%}

# # global

def reverse_number(num):
    rev = 0
    
    while num > 0:
        rev = num % 10
        rev = rev*10 + rev
        num = num / 10
    return rev
        


num = int(input("enter a number"))

reverse = reverse_number(num)
print(reverse)