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
            "method": "PUT",
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
                   .filter(tipo=0))
    serialMov = MovSerializer(movimientos, many=True)
    return Response(serialMov.data)

@api_view(['GET'])
def getAllIngresos (request):
    movimientos = Movimiento.objects.all().filter( tipo = 1 )
    serialMov = MovSerializer(movimientos, many=True)
    return Response(serialMov.data)

@api_view(['GET'])
def getIngresosByYear(request):
    result = (Movimiento.objects.all()
              .filter(tipo=1)
              .annotate(month=TruncMonth('fecha'))
              .values('month')
              .annotate(cantidad=Sum('cantidad'))
              .order_by('month'))
    serialSum = SumSerializer(result, many = True)
    return Response(serialSum.data)

@api_view(['GET'])
def getGastosByYear(request):
    result = (Movimiento.objects.all()
              .filter(tipo=0)
              .annotate(month=TruncMonth('fecha'))
              .values('month')
              .annotate(cantidad=Sum('cantidad'))
              .order_by('month'))
    serialSum = SumSerializer(result, many = True)
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
    serialBalan = BalanceSerializer(result, many = True)
    return Response(serialBalan.data)

@api_view(['PUT'])
def updateMov (request, pk):
    data = request.data
    mov = Movimiento.objects.get(id=pk)
    serialMov = MovSerializer(instance=mov, data=data)

    if serialMov.is_valid():
        serialMov.save()

    return Response(serialMov.data)   

@api_view(['POST'])
def createMov (request):
    data = request.data
    mov = Movimiento.objects.create(
        descripcion = data['descripcion'],
        cantidad = data['cantidad'],
        fecha = data['fecha'],
        tipo = data['tipo']
    )

    serialMov = MovSerializer(mov, many=False)

    return Response(serialMov.data)

@api_view(['DELETE'])
def deleteMov (request, pk):
    mov = Movimiento.objects.get(id=pk)
    mov.delete()
    return Response("delete succese")
