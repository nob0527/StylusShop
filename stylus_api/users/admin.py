from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

# Register your models here.
from .models import StylusUser, Profile


class UserProfileInline(admin.StackedInline):
    model = Profile


class StyleUserAdmin(UserAdmin):
    model = StylusUser
    list_display = ["email"]

    fieldsets = (
        ("Login", {"fields": ("email", "username", "password")}),
        ("Permissions", {"fields": ("is_staff", "is_active", "last_login")})
    )
    # ha egy set-et definiálunk akkor is kell a vesző a végére
    add_fieldsets = (
        (None, {"fields": ("email", "password1", "password2")}),
    )
    # egy profilt beágyazunk a másik alá , hogy oldalon legyen
    inlines = [
        UserProfileInline
    ]


admin.site.register(StylusUser, StyleUserAdmin)
