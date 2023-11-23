from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view

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
