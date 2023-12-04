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
            "Endpoint": "ingresos/year/",
            "method": "GET",
            "body": None,
            "description": "Retorna los ingresos agrupados por año.",
        },
        {
            "Endpoint": "gastos/year/",
            "method": "GET",
            "body": None,
            "description": "Retorna los gastos agrupados por año.",
        },
        {
            "Endpoint": "/ingresos/",
            "method": "GET",
            "body": None,
            "description": "Retorna todos los ingresos",
        },
        {
            "Endpoint": "/gastos/",
            "method": "GET",
            "body": None,
            "description": "Retorna todos los gastos",
        },
        {
            "Endpoint": "/balance/",
            "method": "GET",
            "body": None,
            "description": "Retorna el balance del mes",
        },
        {
            "Endpoint": "/create/",
            "method": "POST",
            "body": {"body": ""},
            "description": "Crea un nuevo movimiento",
        },
        {
            "Endpoint": "/update/id/",
            "method": "POST",
            "body": {"body": ""},
            "description": "Actualiza un movimiento",
        },
        {
            "Endpoint": "/delete/id/",
            "method": "DELETE",
            "body": None,
            "description": "Deletes and exiting note",
        },
    ]
    return Response(routes)

@api_view(['GET'])
def getAllGastos (request):
    movimientos = (Movimiento.objects.all()
                   .filter(fecha__month=12, tipo=0))
    print("movimientos: ", movimientos)
    serialMov = MovSerializer(movimientos, many=True)
    print("SerialMov: ",serialMov.data)
    return Response(serialMov.data)

@api_view(['GET'])
def getAllIngresos (request):
    movimientos = Movimiento.objects.all().filter( tipo = 1 )
    print("movimientos: ", movimientos)
    serialMov = MovSerializer(movimientos, many=True)
    print("SerialMov: ",serialMov.data)
    return Response(serialMov.data)

@api_view(['GET'])
def getIngresosByYear(request):
    result = (Movimiento.objects.all()
              .filter(tipo=1)
              .annotate(month=TruncMonth('fecha'))
              .values('month')
              .annotate(cantidad=Sum('cantidad'))
              .order_by('month'))
    print(result)
    serialSum = SumSerializer(result, many = True)
    print(serialSum.data)
    return Response(serialSum.data)

@api_view(['GET'])
def getGastosByYear(request):
    result = (Movimiento.objects.all()
              .filter(tipo=0)
              .annotate(month=TruncMonth('fecha'))
              .values('month')
              .annotate(cantidad=Sum('cantidad'))
              .order_by('month'))
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

