from django.db import models

class Candlestick(models.Model):
    date = models.DateField()
    open = models.FloatField()
    high = models.FloatField()
    low = models.FloatField()
    close = models.FloatField()

    class Meta:
        ordering = ['date']

class LineChart(models.Model):
    title = models.CharField(max_length=200)

class LineChartEntry(models.Model):
    chart = models.ForeignKey(LineChart, on_delete=models.CASCADE, related_name='entries')
    label = models.CharField(max_length=50)
    value = models.FloatField()

class BarChart(models.Model):
    title = models.CharField(max_length=200)

class BarChartEntry(models.Model):
    chart = models.ForeignKey(BarChart, on_delete=models.CASCADE, related_name='entries')
    label = models.CharField(max_length=50)
    value = models.FloatField()

class PieChart(models.Model):
    title = models.CharField(max_length=200)

class PieChartEntry(models.Model):
    chart = models.ForeignKey(PieChart, on_delete=models.CASCADE, related_name='entries')
    label = models.CharField(max_length=50)
    value = models.FloatField()
