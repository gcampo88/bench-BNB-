class Api::BenchesController < ApplicationController
	def create
		puts "we are in benches controller"
		@bench = Bench.create!(bench_params)
		render :index

	end

	def index
		# debugger
		@benches = Bench.in_bounds(params[:filters])
	end


	def show
		@bench = Bench.find(params[:id])
	end


	private
	def bench_params
		params.require(:bench).permit(:description, :lat, :lng, :seating)
	end
end
