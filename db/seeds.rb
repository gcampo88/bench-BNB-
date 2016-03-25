# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Bench.destroy_all

washsq = Bench.create!(description: "A cozy bench in the sunshine of Washington Square Park's dog park", lat: 40.730823, lng: -73.997332)

absquare = Bench.create!(description: "Relax at this lovely bench in front of the tulips in Abingdon Square.", lat: 40.736983, lng: -74.005444)


river = Bench.create!(description: "Lounge by the river at Christopher Street.", lat: 40.733157, lng: -74.012640)

cp = Bench.create!(description: "central park!", lat: 40.771133, lng: -73.974187)

flushing = Bench.create!(description: "flushing!", lat: 40.767499, lng: -73.833079)

pp =  Bench.create!(description: "Is there any place on Earth more wonderful than Prospect Park?", lat: 40.660204, lng: -73.968956)
