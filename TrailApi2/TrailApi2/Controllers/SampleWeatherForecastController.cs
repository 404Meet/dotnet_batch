using Microsoft.AspNetCore.Mvc;

namespace TrailApi2.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SampleWeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
       {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

        private readonly ILogger<SampleWeatherForecastController> _logger;

        public SampleWeatherForecastController(ILogger<SampleWeatherForecastController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<WeatherForecast> Get()
        {
            return Enumerable.Range(1, 10).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = Random.Shared.Next(-10,10),
                Summary = Summaries[Random.Shared.Next(Summaries.Length)]
            })
            .ToArray();
        }

    }
}
