from django.conf.urls import include, url
from django.views.generic import TemplateView
from collector.urls import router

urlpatterns = []

urlpatterns.append(url(r'^api/', include(router.urls)))
urlpatterns.append(url(r'^$', TemplateView.as_view(template_name='index.html')))
