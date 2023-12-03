from django.urls import path
from . import views

urlpatterns = [
  path('', views.getRoutes, name = 'routes'),
  path('all/', views.getAll, name = 'all_mov'),
  path('movs/', views.getByYear, name = 'by_year')
]