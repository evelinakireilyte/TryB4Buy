# Generated by Django 3.2.9 on 2021-12-17 17:31

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Item',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=120)),
                ('make', models.CharField(max_length=100)),
                ('retail_price', models.DecimalField(decimal_places=2, max_digits=9)),
                ('description', models.TextField()),
                ('image', models.URLField(blank=True, null=True)),
                ('try_it_charge', models.DecimalField(decimal_places=2, max_digits=9)),
                ('location', models.CharField(max_length=120)),
            ],
        ),
    ]
