"""stylus_api URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from allauth.account.views import confirm_email

urlpatterns = [
    path('admin/', admin.site.urls),

    # ha több verzió esetén éerdemes api/v01/ ként írnni
    path('api/auth/', include('rest_auth.urls')),

    path('api/auth/registration/account-confirm-email/', confirm_email, name="account_email_verification_sent"),
    path('api/auth/registration/account-confirm-email/<key>/', confirm_email),

    path('api/auth/registration/', include('rest_auth.registration.urls'))
]
