class Bench < ActiveRecord::Base
	validates :description, :lat, :lng, presence: true

	def self.in_bounds(bounds)
		# debugger
		return Bench.all unless bounds

		top_lat = bounds[:northEast][:lat]
		bottom_lat = bounds[:southWest][:lat]
		top_lng = bounds[:northEast][:lng]
		bottom_lng = bounds[:southWest][:lng]

		@benches = Bench.where(lat: (bottom_lat..top_lat)).where(lng: (bottom_lng..top_lng))
		return @benches

	end
end
