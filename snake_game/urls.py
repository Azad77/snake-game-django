"""
Author: Dr. Azad Rasul
Affiliation: Soran University
Email: azad.rasul@soran.edu.iq
Year: 2025
"""

from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('snake.urls')),
]
