from rest_framework import serializers
from .models import Movimiento, Suma

class MovSerializer(serializers.ModelSerializer):
  class Meta:
    model = Movimiento
    fields = '__all__'

class SumSerializer(serializers.ModelSerializer):
  class Meta:
    model = Suma
    fields = '__all__'
