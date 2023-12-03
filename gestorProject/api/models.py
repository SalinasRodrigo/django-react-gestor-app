from django.db import models

# Create your models here.

class Movimiento (models.Model):
  descripcion = models.CharField(max_length=250)
  cantidad = models.IntegerField()
  fecha = models.DateField()
  tipo = models.SmallIntegerField()
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)

class Suma (models.Model):
  cantidad = models.IntegerField()
  month = models.DateField()

  
  
