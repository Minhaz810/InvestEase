from django.contrib import admin
from django.urls import path,include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/user/',include('users.urls'))
]

#This is for development only, has to serve through nginx or S3 or blob storage later
urlpatterns+=static(settings.MEDIA_URL,document_root = settings.MEDIA_ROOT)