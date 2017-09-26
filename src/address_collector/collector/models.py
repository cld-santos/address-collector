from django.db import models


class Address(models.Model):
    lat = models.DecimalField(
        max_digits=12,
        decimal_places=9
    )
    lon = models.DecimalField(
        max_digits=12,
        decimal_places=9
    )
    name = models.CharField(max_length=300)