from rest_framework import serializers
from .models import *

class TaskSerializer(serializers.ModelSerializer):
	class Meta:
		model = Task
		fields = '__all__'

	def create(self, validated_data):
		solution = super(TaskSerializer, self).create(validated_data)
		solution.save()
		return solution
