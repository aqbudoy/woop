from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Rider(models.Model):
    rider_id = models.CharField(max_length=100, primary_key=True)
    first_name = models.CharField(max_length=100)
    middle_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField()
    birth_date = models.DateField()
    account = models.ForeignKey(User, on_delete=models.CASCADE)
