using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using doblen.Data;
using doblen.Models;

namespace doblen.Controllers
{
    public class BlogsController : Controller
    {
        private readonly ApplicationDbContext _context;
        private readonly IWebHostEnvironment _env;

        public BlogsController(ApplicationDbContext context, IWebHostEnvironment env)
        {
            _context = context;
            _env = env;
        }

        // GET: Login
        public IActionResult Login()
        {
            return View();
        }

        // POST: Login
        [HttpPost]
        public IActionResult Login(LoginViewModel model)
        {
            if (ModelState.IsValid)
            {
                var user = _context.User.FirstOrDefault(u => u.Username == model.Username && u.Password == model.Password);
                if (user != null)
                {
                    HttpContext.Session.SetString("Username", user.Username);
                    return RedirectToAction("Index");
                }
                ModelState.AddModelError("", "Invalid username or password.");
            }
            return View(model);
        }

        public IActionResult Logout()
        {
            HttpContext.Session.Clear();
            return RedirectToAction("Login");
        }

        private bool IsLoggedIn()
        {
            return !string.IsNullOrEmpty(HttpContext.Session.GetString("Username"));
        }

        // GET: Blogs
        public async Task<IActionResult> Index()
        {
            if (!IsLoggedIn()) return RedirectToAction("Login");

            return View(await _context.blog.ToListAsync());
        }

        // GET: Blogs/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (!IsLoggedIn()) return RedirectToAction("Login");
            if (id == null) return NotFound();

            var blog = await _context.blog.FirstOrDefaultAsync(m => m.Id == id);
            if (blog == null) return NotFound();

            return View(blog);
        }

        // GET: Blogs/Create
        public IActionResult Create()
        {
            if (!IsLoggedIn()) return RedirectToAction("Login");
            return View();
        }

        // POST: Blogs/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create(blog blog)
        {
            if (!IsLoggedIn()) return RedirectToAction("Login");

            if (blog.File != null && blog.File.Length > 0)
            {
                var fileName = Guid.NewGuid() + Path.GetExtension(blog.File.FileName);
                var uploadPath = Path.Combine(_env.WebRootPath, "images");
                Directory.CreateDirectory(uploadPath);

                var filePath = Path.Combine(uploadPath, fileName);
                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    await blog.File.CopyToAsync(stream);
                }

                blog.Img = "/images/" + fileName;
            }

            _context.Add(blog);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        // GET: Blogs/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (!IsLoggedIn()) return RedirectToAction("Login");
            if (id == null) return NotFound();

            var blog = await _context.blog.FindAsync(id);
            if (blog == null) return NotFound();

            return View(blog);
        }

        // POST: Blogs/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, blog blog)
        {
            if (!IsLoggedIn()) return RedirectToAction("Login");
            if (id != blog.Id) return NotFound();

            try
            {
                if (blog.File != null && blog.File.Length > 0)
                {
                    var fileName = Guid.NewGuid() + Path.GetExtension(blog.File.FileName);
                    var uploadPath = Path.Combine(_env.WebRootPath, "images");
                    Directory.CreateDirectory(uploadPath);

                    var filePath = Path.Combine(uploadPath, fileName);
                    using (var stream = new FileStream(filePath, FileMode.Create))
                    {
                        await blog.File.CopyToAsync(stream);
                    }

                    blog.Img = "/images/" + fileName;
                }

                _context.Update(blog);
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BlogExists(blog.Id)) return NotFound();
                else throw;
            }

            return RedirectToAction(nameof(Index));
        }

        // GET: Blogs/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (!IsLoggedIn()) return RedirectToAction("Login");
            if (id == null) return NotFound();

            var blog = await _context.blog.FirstOrDefaultAsync(m => m.Id == id);
            if (blog == null) return NotFound();

            return View(blog);
        }

        // POST: Blogs/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            if (!IsLoggedIn()) return RedirectToAction("Login");

            var blog = await _context.blog.FindAsync(id);
            if (blog != null)
            {
                _context.blog.Remove(blog);
                await _context.SaveChangesAsync();
            }

            return RedirectToAction(nameof(Index));
        }

        private bool BlogExists(int id)
        {
            return _context.blog.Any(e => e.Id == id);
        }
    }
}
