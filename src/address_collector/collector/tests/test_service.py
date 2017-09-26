from django.test import TransactionTestCase
from ..models import Address

class CollectorServiceTestCase(TransactionTestCase):

    def test_must_create_an_address(self):
        data = {
            'lat': -48,
            'lon': -20,
            'name': 'avenida paulista, 1500, sao paulo'
        }

        address = Address.objects.create(**data)

        self.assertEqual(data['name'], address.name)    