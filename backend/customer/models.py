from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Customer(models.Model):
    customer_id = models.CharField(max_length=50, primary_key=True)
    first_name = models.CharField(max_length=100)
    middle_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField()
    birth_date = models.DateField()
    account = models.ForeignKey(User, on_delete=models.CASCADE)

class Address(models.Model):
    address_id = models.CharField(max_length=100, primary_key=True)
    blk_or_lot = models.IntegerField(blank=True, null=True)
    building_name = models.CharField(max_length=100, blank=True, null=True)
    street_name = models.CharField(max_length=100)
    barangay = models.CharField(max_length=100)
    municipality_or_city = models.CharField(max_length=100)
    province = models.CharField(max_length=100, blank=True, null=True)
    notes = models.TextField()
    label = models.CharField(max_length=100)
    coordinates_x = models.CharField(max_length=100)
    coordinates_y = models.CharField(max_length=100)
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)