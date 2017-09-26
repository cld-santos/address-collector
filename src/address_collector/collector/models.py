from django.db import models
from fuzzywuzzy import fuzz

DUPLICATED_RATIO = 85


class AddressManager(models.Manager):

    def create(self, **kwargs):
        found_address = [item for item in Address.objects.values_list('name') if fuzz.ratio(item, kwargs['name']) > DUPLICATED_RATIO]
        if found_address:
            raise Exception('Duplicated Address')
        address = Address(**kwargs)
        address.save()
        return address


class Address(models.Model):
    objects = AddressManager()

    lat = models.DecimalField(
        max_digits=12,
        decimal_places=9
    )
    lon = models.DecimalField(
        max_digits=12,
        decimal_places=9
    )
    name = models.CharField(max_length=300)
