from django.contrib import admin
from .models import Farm


@admin.register(Farm)
class FarmAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "owner",
        "county",
        "size_acres",
    )

    search_fields = (
        "name",
        "county",
        "owner__username",
    )

    list_filter = (
        "county",
    )