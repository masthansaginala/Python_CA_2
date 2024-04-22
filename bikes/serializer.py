from .models import Bikes
from rest_framework import serializers

class BikeSerializer(serializers.ModelSerializer):
    bike_image_1_url = serializers.SerializerMethodField()
    bike_image_2_url = serializers.SerializerMethodField()
    bike_image_3_url = serializers.SerializerMethodField()

    class Meta:
        model = Bikes
        fields = '__all__'

    def get_bike_image_1_url(self, obj):
        request = self.context.get('request')
        image_url = obj.bike_image_1.url
        return request.build_absolute_uri(image_url)

    def get_bike_image_2_url(self, obj):
        request = self.context.get('request')
        image_url = obj.bike_image_2.url
        return request.build_absolute_uri(image_url)

    def get_bike_image_3_url(self, obj):
        request = self.context.get('request')
        image_url = obj.bike_image_3.url
        return request.build_absolute_uri(image_url)