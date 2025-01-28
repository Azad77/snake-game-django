"""
Author: Dr. Azad Rasul
Affiliation: Soran University
Email: azad.rasul@soran.edu.iq
Year: 2025
"""

from django.urls import path
from . import views

urlpatterns = [
    path('', views.game, name='game'),
]
