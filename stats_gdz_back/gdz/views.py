from django.shortcuts import render
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.shortcuts import render
from rest_framework import generics
from .models import *
from .serializers import *



class Hello(APIView):

	def get(self, request):
		content = {'message': 'hello!'}
		return Response(content)

class TaskList(generics.ListAPIView):
	serializer_class = TaskSerializer
	queryset = Task.objects.all()


class SingleTask(generics.ListAPIView):
	serializer_class = TaskSerializer

	def get_queryset(self):
		task_id = self.kwargs.get("task_id")
		queryset = Task.objects.filter(task_id=task_id)
		return queryset
		
