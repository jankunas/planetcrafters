import json
import csv
import codecs
import boto3
import botocore
from io import StringIO
import random

def lambda_handler(event, context):
    
    shuffle_list = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
    
    times_earth_mass_is_smaller_than_jupyter = 317.81
    times_earth_radius_is_smaller_than_jupyter= 10.97
    
    
    random_integer = random.randint(1,10)
    image_url = 'https://space-apps-challenge.s3.eu-central-1.amazonaws.com/planet_images/' + str(random_integer) + '.jpg'
    
    event = event['queryStringParameters']
    
    mass = float(event['mass'])
    radius = float(event['radius'])
    
    # mass = 2850.0
    # radius = 16.5
    
    dict_to_return = {}
    
    
    BUCKET_NAME = 'space-apps-challenge' 
    KEY = 'planets.csv'
    
    s3 = boto3.resource('s3')
    bucket = s3.Bucket(BUCKET_NAME)
    obj = bucket.Object(key = KEY)
    stream = codecs.getreader('utf-8')(obj.get()['Body'])
    lines = list(csv.DictReader(stream))
    
    check = None
    
    for row in lines:
        planet_name = row['pl_name']
        
        try:
            planet_mass = float(row['pl_bmassj']) * times_earth_mass_is_smaller_than_jupyter
        except ValueError:
            planet_mass = 0.0
        try:
            planet_radius = float(row['pl_radj']) * times_earth_radius_is_smaller_than_jupyter
        except ValueError:
            planet_radius = 0.0
        
        if planet_mass <= (mass * 1.1) and planet_mass >= (mass * 0.9) and planet_radius <= (radius * 1.1) and planet_radius >= (radius * 0.9):
            dict_to_return[planet_name] = {'planet_mass': planet_mass, 'planet_radius': planet_radius, 'image_url': image_url}
            break
            
    return {
        'statusCode': 200,
        # 'headers': {'Content-Type': 'application/json'},
        'body': str(json.dumps(dict_to_return))
    }