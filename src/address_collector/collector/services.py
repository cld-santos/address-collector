from django.http import HttpResponse
from .models import Address


def clean_addresses(request):
    try:
        Address.objects.all().delete()
        return HttpResponse('ok')
    except:
        return HttpResponse('fail')
