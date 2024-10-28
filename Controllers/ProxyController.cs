using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
using System.Threading.Tasks;

namespace VGApi.Controllers
{
    [ApiController]
    [Route("proxy")]
    public class ProxyController : ControllerBase
    {
        private readonly HttpClient _httpClient;

        public ProxyController(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        [HttpGet("reviews")]
        public async Task<IActionResult> GetReviews()
        {
            try
            {
                // Send a request to the external API
                var response = await _httpClient.GetAsync("https://saga.filipjohn.workers.dev/reviews");
                response.EnsureSuccessStatusCode();
                
                // Read the response content
                var content = await response.Content.ReadAsStringAsync();
                
                // Return the content to the client
                return Content(content, "application/json");
            }
            catch (HttpRequestException ex)
            {
                // Handle any errors when fetching data
                return StatusCode(500, new { error = "Failed to fetch data", details = ex.Message });
            }
        }
    }
}
