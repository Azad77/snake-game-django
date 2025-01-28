"""
Author: Dr. Azad Rasul
Affiliation: Soran University
Email: azad.rasul@soran.edu.iq
Year: 2025
"""

from django.shortcuts import render

def game(request):
    return render(request, 'snake/game.html')
