from django.urls import path
from . import views

urlpatterns = [
  path('', views.getRoutes, name = 'routes'),
  path('gastos/', views.getAllGastos, name = 'gastos'),
  path('gastos/year/', views.getGastosByYear, name = 'gastos_year'),
  path('ingresos/', views.getAllIngresos, name = 'ingresos'),
  path('ingresos/year/', views.getIngresosByYear, name = 'ingresos_year'),
  path('balance/',views.getBalance, name='balance' ),
  path('update/<int:pk>/', views.updateMov, name="update-mov"), 
  path('create/', views.createMov, name="create-mov"), 
]