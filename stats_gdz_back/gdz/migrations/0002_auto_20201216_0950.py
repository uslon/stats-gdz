# Generated by Django 3.1.4 on 2020-12-16 09:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gdz', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='task',
            name='id',
        ),
        migrations.AlterField(
            model_name='task',
            name='task_id',
            field=models.IntegerField(primary_key=True, serialize=False),
        ),
    ]
