"""
Author: Dr. Azad Rasul
Affiliation: Soran University
Email: azad.rasul@soran.edu.iq
Year: 2025
"""

"""
WSGI config for snake_game project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/5.1/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'snake_game.settings')

application = get_wsgi_application()
