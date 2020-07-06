from django.contrib import admin

# Register your models here.

from .models import Portfolio
from .models import Comments

admin.site.register(Portfolio)
admin.site.register(Comments)