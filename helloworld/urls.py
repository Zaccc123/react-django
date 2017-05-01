from django.conf.urls import url
from helloworld import views


urlpatterns = [
    url(r'^$', views.index, name='index'),
]
