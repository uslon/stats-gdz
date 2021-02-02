from django.urls import path
from .views import *

urlpatterns = [
	path('hello/', Hello.as_view()),
	path('tasks/', TaskList.as_view()),
	path('task/<id>', SingleTask.as_view())
]