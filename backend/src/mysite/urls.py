from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('portfolio/', include('apis.portfolio.urls')),
    path('comments/', include('apis.comments.urls')),
]
