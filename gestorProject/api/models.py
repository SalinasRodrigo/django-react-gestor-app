from django.db import models

# Create your models here.

class Gasto (models.Model):
  descripcion = models.CharField(max_length=250)
  cantidad = models.IntegerField()
  fecha = models.DateField()
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)

class Ingreso (models.Model):
  descripcion = models.CharField(max_length=250)
  cantidad = models.IntegerField()
  fecha = models.DateField()
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)

