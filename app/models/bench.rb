class Bench < ActiveRecord::Base
	validates :description, :lat, :lng, presence: true

	def self.in_bounds(filters)
		# debugger
		return Bench.all unless filters

		top_lat = filters[:bounds][:northEast][:lat]
		bottom_lat = filters[:bounds][:southWest][:lat]
		top_lng = filters[:bounds][:northEast][:lng]
		bottom_lng = filters[:bounds][:southWest][:lng]

		# debugger


		if filters[:minSeats] && (filters[:minSeats] != "")
			min_seat = filters[:minSeats].to_i
		else
			min_seat = 0
		end

		if filters[:maxSeats] && (filters[:maxSeats] != "")
			max_seat = filters[:maxSeats].to_i
		else
			max_seat = 100
		end


		@benches = Bench.where(lat: (bottom_lat..top_lat)).where(lng: (bottom_lng..top_lng)).where(seating: (min_seat..max_seat))

		return @benches

	end
end
