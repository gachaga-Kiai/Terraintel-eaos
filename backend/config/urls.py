from django.contrib import admin
from django.http import JsonResponse
from django.urls import include, path

def home(request):
    return JsonResponse({
        "name": "TerraIntel EAOS API",
        "version": "1.0.0",
        "status": "running"
    })

urlpatterns = [
    path("", home),

    path("admin/", admin.site.urls),
    path("api/farms/", include("farms.urls")),
    path("api/accounts/", include("accounts.urls")),
    # ...the rest of your routes...
]