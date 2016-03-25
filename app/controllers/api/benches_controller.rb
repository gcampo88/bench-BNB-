class Api::BenchesController < ApplicationController
	def index
		# debugger
		@benches = Bench.in_bounds(params[:bounds])
	end


	def show
		@bench = Bench.find(params[:id])
	end


	private
	def bench_params
		params.require(:bench).permit(:description, :lat, :lng)
	end
end
