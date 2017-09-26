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

    def test_must_block_create_duplicated_address(self):
        data_a = {
            'lat': -48,
            'lon': -20,
            'name': 'avenida paulista, 1500, sao paulo'
        }

        data_b = {
            'lat': -48,
            'lon': -20,
            'name': 'Avenida paulista 1500 Sao Paulo'
        }

        Address.objects.create(**data_a)
        try:
            Address.objects.create(**data_b)
        except Exception:
            throw_an_exception = True

        self.assertTrue(throw_an_exception)
