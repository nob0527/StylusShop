# Generated by Django 3.1.5 on 2021-01-10 12:44

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelManagers(
            name='stylususer',
            managers=[
            ],
        ),
        migrations.RenameField(
            model_name='profile',
            old_name='zip_code',
            new_name='zipcode',
        ),
    ]