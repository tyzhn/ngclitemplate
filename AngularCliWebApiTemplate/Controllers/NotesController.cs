using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using AngularCliWebApiTemplate.Data;

namespace AngularCliWebApiTemplate.Controllers
{
    public class NotesController : ApiController
    {
        private NotesManagementEntities db = new NotesManagementEntities();

        [HttpGet]
        public dynamic GetNotesByMemberId(int memberId)
        {
            try
            {
                var notes = db.MemberNotes.Where(x => x.MemberID == memberId).Select(x => x.Note).ToList();
                return notes;
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }
    }
}