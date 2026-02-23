from django.contrib import admin
from .models import Recipes, Ingredients, Instructions  

admin.site.register(Recipes),
admin.site.register(Ingredients),
admin.site.register(Instructions),
