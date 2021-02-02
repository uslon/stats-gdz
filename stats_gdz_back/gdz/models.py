from django.db import models


MAX_SOLUTION_LENGTH = 500

class Task(models.Model):
	task_id = models.IntegerField(primary_key=True, unique=True)
	solution = models.CharField(max_length = MAX_SOLUTION_LENGTH)