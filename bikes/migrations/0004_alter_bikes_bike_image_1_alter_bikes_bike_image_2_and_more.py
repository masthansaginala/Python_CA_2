# Generated by Django 5.0.4 on 2024-04-22 08:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bikes', '0003_alter_bikes_location'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bikes',
            name='bike_image_1',
            field=models.FileField(upload_to='images/'),
        ),
        migrations.AlterField(
            model_name='bikes',
            name='bike_image_2',
            field=models.FileField(upload_to='images/'),
        ),
        migrations.AlterField(
            model_name='bikes',
            name='bike_image_3',
            field=models.FileField(upload_to='images/'),
        ),
    ]
