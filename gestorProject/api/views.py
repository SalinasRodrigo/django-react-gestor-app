from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Movimiento, Suma
from django.db.models import Sum, Count
from django.db.models.functions import  TruncMonth
from .serializaers import MovSerializer, SumSerializer, BalanceSerializer
import json


@api_view(['GET'])
def getRoutes(request):
    routes = [
        {
            "Endpoint": "/all/",
            "method": "GET",
            "body": None,
            "description": "Retorna Todos los ingresos y gastos del usuario.",
        },
        {
            "Endpoint": "/all/date",
            "method": "GET",
            "body": None,
            "description": "retorna todos los ingresos y gastos de la fecha <date>",
        },
        {
            "Endpoint": "/igresos/create/",
            "method": "POST",
            "body": {"body": ""},
            "description": "Crea una nueva entrada de ingresos",
        },
        {
            "Endpoint": "/gastos/create/",
            "method": "POST",
            "body": {"body": ""},
            "description": "Crea una nueva entrada de gastos",
        },
        {
            "Endpoint": "/igresos/id/update/",
            "method": "POST",
            "body": {"body": ""},
            "description": "Actualiza una entrada de ingresos",
        },
        {
            "Endpoint": "/gastos/id/update/",
            "method": "POST",
            "body": {"body": ""},
            "description": "Actualiza una entrada de ingresos",
        },
        {
            "Endpoint": "//id/update/",
            "method": "PUT",
            "body": {"body": ""},
            "description": "Creates an existing note with data sent in post request",
        },
        {
            "Endpoint": "//id/delete/",
            "method": "DELETE",
            "body": None,
            "description": "Deletes and exiting note",
        },
    ]
    return Response(routes)

@api_view(['GET'])
def getAll (request):

    movimientos = Movimiento.objects.all()
    print("movimientos: ", movimientos)
    serialMov = MovSerializer(movimientos, many=True)
    print("SerialMov: ",serialMov.data)
    return Response(serialMov.data)

@api_view(['GET'])
def getByYear(request):
    result = (Movimiento.objects.all()
              .annotate(month=TruncMonth('fecha'))
              .values('month')
              .annotate(cantidad=Sum('cantidad'))
              .order_by())
    print(result)
    serialSum = SumSerializer(result, many = True)
    print(serialSum.data)
    return Response(serialSum.data)

@api_view(['GET'])
def getBalance(request):
    result = (Movimiento.objects.all()
              .values('tipo')
              .annotate(cantidad=Sum('cantidad'))
              .order_by())
    for i in result:
        if (i['tipo'] == 0):
            i['tipo'] = 'gastos'
        if (i['tipo'] == 1):
            i['tipo'] = 'ingreso'
    print(result)
    serialBalan = BalanceSerializer(result, many = True)
    print(serialBalan.data)
    return Response(serialBalan.data)

