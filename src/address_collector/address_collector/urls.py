from django.conf.urls import include, url
from django.views.generic import TemplateView
from collector.urls import router
from collector.services import clean_addresses


urlpatterns = []

urlpatterns.append(url('clean_addresses', clean_addresses))
urlpatterns.append(url(r'^api/', include(router.urls)))
urlpatterns.append(url(r'^$', TemplateView.as_view(template_name='index.html')))
